import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ModalDeleteConfig, PageConfig } from '@core/constants/app.constant';
import { UrlConstant } from '@core/constants/url.constant';
import { ApiService } from '@core/data-services/api.service';
import { IPagedResult } from '@core/models/common';
import { CustomTranslateService, NotificationService } from '@core/services/common';
import { MenuQuery } from '@management-state/menu/menu.query';
import { WindowCloseResult, WindowService } from '@progress/kendo-angular-dialog';
import { NzModalService } from 'ng-zorro-antd/modal';
import { catchError, finalize, map, takeUntil, tap } from 'rxjs/operators';
import { BaseLaboratoryCatalogComponent } from '../_base/base-laboratory-catalog.components';
import { ILoaiBaoCao } from '../_models/ptn.model';
import { FormLoaiBaoCaoKhoaHocComponent } from './form-loai-bao-cao-khoa-hoc/form-loai-bao-cao-khoa-hoc.component';


@Component({
  selector: 'app-loai-bao-cao-khoa-hoc',
  templateUrl: './loai-bao-cao-khoa-hoc.component.html',
  styleUrls: ['./loai-bao-cao-khoa-hoc.component.scss']
})
export class LoaiBaoCaoKhoaHocComponent extends BaseLaboratoryCatalogComponent<ILoaiBaoCao> implements OnInit, OnDestroy {

    constructor(
        private apiService: ApiService,
        private modal: NzModalService,
        private notification: NotificationService,
        protected windowService: WindowService,
        private translate: CustomTranslateService,
        protected menuQuery: MenuQuery
    ) {
        super(menuQuery, windowService);
    }
    showFormCreateOrUpdate() {
        this.opened = true;
        const windowRef = this.windowService.open({
            title: this.translate.get('SCI.LBC.LOAI_BAO_CAO'),
            content: FormLoaiBaoCaoKhoaHocComponent,
            width: 850,
            top: 10,
            autoFocusedElement: 'body',
        });
        const param = windowRef.content.instance;
        param.action = this.action;
        param.model = this.model;
        windowRef.result.subscribe(result => {
            if (result instanceof WindowCloseResult) {
                this.opened = false;
                this.loadItems();
            }
        });
    }

    ngOnInit() {

        this.roles.isCreate = true;
        this.roles.isUpdate = true;
        this.roles.isDelete = true;

        this.tabName = this.menuQuery.getTitleWithCurrentUrl();
        super.ngOnInit();
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

    removeSelectedHandler() {
        if (this.selectionIds.length > 0) {
            const body = {
                ids: this.selectionIds,
            };
            this.modal.confirm({
                nzTitle: ModalDeleteConfig.title,
                nzContent: ModalDeleteConfig.content,
                nzOkText: ModalDeleteConfig.yes,
                nzOkType: 'danger',
                nzOnOk: () => {
                    this.apiService
                        .delete(UrlConstant.API.DM_LOAI_BAO_CAO, body)
                        .pipe(takeUntil(this.destroyed$))
                        .subscribe(res => {
                            // reset
                            this.selectionIds = [];

                            // show notification
                            this.notification.showSuccessMessage(this.translate.get('MES.DELETE_DONE'));
                            // set current page
                            this.gridState.skip = 0;
                            // reload data
                            this.loadItems();
                        });
                },
                nzCancelText: ModalDeleteConfig.no,
                nzOnCancel: () => { },
            });
        }
    }

    /**
    * Removes handler
    * @param dataItem
    */
    removeHandler(dataItem: ILoaiBaoCao) {
        this.selectionIds = [];
        this.selectionIds.push(dataItem.id);
        this.removeSelectedHandler();
    }

    /**
    * Loads data via api service
    */
    protected loadItems() {
        this.isLoading = true;
        this.gridView$ = this.apiService.post(UrlConstant.API.DM_LOAI_BAO_CAO + '/GetList', this.queryOptions).pipe(
            map(res => {
                const results = res.result as IPagedResult<any[]>;
                if (results && results.items) {
                    return {
                        data: results.items,
                        total: results.pagingInfo.totalItems,
                    };
                } else {
                    return {
                        data: [],
                        total: 0,
                    };
                }
            }),
            tap(res => {
                if (res.total <= this.gridState.take) {
                    this.pageConfig = false;
                } else {
                    this.pageConfig = PageConfig;
                }
            }),
            finalize(() => (this.isLoading = false))
        );
    }
}