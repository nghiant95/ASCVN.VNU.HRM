import { DuLieuNhanSuEnum } from "./human-resource.enum";

export interface INhanSu {
    idNhanSu: number;
    maNhanSu: string;
    hoDem: string;
    ten: string;
    tenGoiKhac: string;
    idGioiTinh: number;
    ngaySinh: Date;
    email: string;
    emailNoiBo: string;
    soDienThoai: string;
    idLoaiNhanSu: number;
    idCoQuan: number;
    tenCoQuan: string;
    idChucVu: number;
    tenChucVu: string;
    idChucDanh: number;
    tenChucDanh: string;
    userId: number;
    idLoaiHopDong: number;
    tenLoaiHopDong: string;
    trangThaiNhanSuId: number;
    doiTuongDanhGiaId: number;
    tenDoiTuongDanhGia: string;
    stt: number;
    isVisible: boolean;
    ghiChu: string;
    soCMND: string;
    isGiangVien: boolean;
    isNghienCuuVien: boolean;
    isThamGiaNVCL: boolean;
    isThamGiaGiangDayCL: boolean;
    isQuanLyCSVC: boolean;
    isQuanLySach: boolean;
    tenGioiTinh: string;
    tenLoaiNhanSu: string;
}

export interface INhanSuChiTiet {
    idNhanSu: number;
    userName: string;
    maNhanSu: string;
    hoDem: string;
    ten: string;
    tenGoiKhac: string;
    idGioiTinh: number;
    tenGioiTinh: string;
    email: string;
    soDienThoai: string;
    idLoaiNhanSu: number;
    tenLoaiNhanSu: string;
    idCoQuan: number;
    tenCoQuan: string;
    idChucDanh?: number;
    tenChucDanh: string;
    idChucVu?: number;
    tenChucVu: string;
    tenNgachCongChuc?: string;
    idHinhNhanSu?: number;
    tenHinhNhanSu: string;
    idUser: number;
    idLoaiHopDong?: number;
    tenLoaiHopDong: string;
    stt?: number;
    idTrangThaiNhanSu?: number;
    tenTrangThaiNhanSu: string;
    ghiChuNhanSu: string;
    ghiChuNhanSuChiTiet?: string;
    ngaySinh?: Date;
    emailNoiBo: string;
    isGiangVien?: boolean;
    isNghienCuuVien?: boolean;
    isThamGiaNVCL?: boolean;
    isThamGiaGiangDayCL?: boolean;
    isThamGiaQuanLyCL?: boolean;
    isQuanLySach?: boolean;
    idDoiTuongDanhGia?: number;
    tenDoiTuongDanhGia: string;
    lyDoDuyet: string;
    soCMND: string;
    isSSO?: boolean;
    ngayCapCMND?: Date;
    idDanToc?: number;
    tenDanToc: string;
    idTonGiao?: number;
    tenTonGiao: string;
    idGiaDinhChinhSach?: number;
    tenGiaDinhChinhSach: string;
    noiSinh_IDTinh?: number;
    noiSinh_TenTinh: string;
    noiSinh_IDHuyen?: number;
    noiSinh_TenHuyen: string;
    noiSinh_IDPhuongXa?: number;
    noiSinh_TenPhuongXa: string;
    queQuan_IDTinh?: number;
    queQuan_TenTinh: string;
    queQuan_IDHuyen?: number;
    queQuan_TenHuyen: string;
    queQuan_IDPhuongXa?: number;
    queQuan_TenPhuongXa: string;
    queQuan_IDQuocGia?: number;
    queQuan_TenQuocGia: string;
    queQuan_SoNha: string;
    hktT_IDQuocGia?: number;
    hktT_TenQuocGia?: string;
    hktT_IDTinh?: number;
    hktT_TenTinh: string;
    hktT_IDHuyen?: number;
    hktT_TenHuyen: string;
    hktT_IDPhuongXa?: number;
    hktT_TenPhuongXa: string;
    hktT_SoNha: string;
    dclL_IDTinh?: number;
    dclL_TenTinh: string;
    dclL_IDHuyen?: number;
    dclL_TenHuyen: string;
    dclL_IDPhuongXa?: number;
    dclL_TenPhuongXa: string;
    dclL_SoNha: string;
    dclL_IDQuocGia?: number;
    dclL_TenQuocGia: string;
    noiCapCMND: string;
    hoChieu: string;
    ngayCapHoChieu?: Date;
    noiCapHoChieu: string;
    noiSinh_IDQuocGia?: number;
    noiSinh_TenQuocGia: string;
    noiSinh_SoNha: string;
    dienThoaiNhaRieng: string;
    dienThoaiCoQuan: string;
    soBHXH: string;
    idTinhTrangHonNhan?: number;
    tenTinhTrangHonNhan: string;
    idFileDinhKem?: number;
    isVisible?: boolean;
    idNhanSuChiTiet?: number;
    idTrangThaiDuLieu?: number;
    idNhanSuDuyet?: number;
    pathHinhNhanSu?: string;

    tenDoiTuongChinhSach?: string;

    compareData?: INhanSuChiTiet;
    idThanhPhanGiaDinh: number;
    tenThanhPhanGiaDinh: string;
    idViTriViecLam: number;
    tenViTriViecLam: string;
    idNhomViTriViecLam: number;
    tenNhomViTriViecLam: string;
    soSoLaoDong: string;
    ngayCapSoLaoDong?: Date;
    noiCapSoLaoDong: string;
    idQuocTich: number;
    tenQuocTich: string;
}

export interface INhanSuCoQuanChucVu {
    nhanSuId: number;
    maNhanSu: string;
    hoDem: string;
    ten: string;
    coQuanId: number;
    chucVuId: number;
    tenCoQuan: string;
    tenChucVu: string;
    tenChucDanh: string;
}

export interface INhanSuCoQuan {
    nhanSuId: number;
    maNhanSu: string;
    hoDem: string;
    ten: string;
    gioiTinhId: number;
    ngaySinh: Date;
    loaiNhanSuId: number;
    coQuanId: number;
    chucVuId: number;
    chucDanhId: number;
    userId: number;
    doiTuongDanhGiaId: number;
    tenCoQuan: string;
    tenGioiTinh: string;
    tenDonVi: string;
    tenDoiTuongDanhGia: string;
}

export interface IDataSearch {
    idNhanSu: number;
    manHinh: DuLieuNhanSuEnum;
}
