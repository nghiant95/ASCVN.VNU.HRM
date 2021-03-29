import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnphabetPipe } from '@shared/pipes/tranfer-anphabet.pipe';
import { ArrayFilterPipe } from '@shared/pipes/filter.pipe';
import { TranferActionPipe } from '@shared/pipes/tranfer-action.pipe';
import { SafeHtmlPipe } from '@shared/pipes/safe-html.pipe';
import { ConvertUrlPipe } from '@shared/pipes/convert-url.pipe';
import { TranferQuyPipe } from '@shared/pipes/tranfer-quy.pipe';
import { TranferIconPipe } from '@shared/pipes/tranfer-icon.pipe';
import { TranferLoaiBoSungQuyenPipe, TranferLoaiThuaKeQuyenPipe, TranferLoaiThuHoiQuyenPipe } from '@shared/pipes/tranfer-enum.pipe';
import { TranferNoiUngDungPipe } from './noi-ung-dung.pipe';
import { TranferTinhTrangNhiemVuPipe } from './tinh-trang-nhiem-vu.pipe';
import { TranferTrangThaiKeHoachPipe } from './tranfer-trang-thai-ke-hoach.pipe';
import {EllipsisPipe} from './ellipsis.pipe';
import { TranferNoiDungLichSuKeHoachPipe } from './noi-dung-lich-su-ke-hoach.pipe';
import { TranferTrangThaiHopDongPipe } from './tranfer-trang-thai-hop-dong.pipe';

const PIPES = [
    AnphabetPipe,
    ArrayFilterPipe,
    TranferActionPipe,
    SafeHtmlPipe,
    ConvertUrlPipe,
    TranferQuyPipe,
    TranferIconPipe,
    TranferLoaiBoSungQuyenPipe,
    TranferLoaiThuHoiQuyenPipe,
    TranferLoaiThuaKeQuyenPipe,
    TranferNoiUngDungPipe,
    TranferNoiDungLichSuKeHoachPipe,
    TranferTinhTrangNhiemVuPipe,
    TranferTrangThaiKeHoachPipe,
    TranferTrangThaiHopDongPipe,
    EllipsisPipe
];

@NgModule({
    declarations: [PIPES],
    imports: [CommonModule],
    exports: [PIPES],
})
export class CustomPipeModule {}
