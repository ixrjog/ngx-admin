export interface DataTable<T> {
    body: {
        data: Array<T>,
        nowPage: number,
        totalNum: number,
    };
    success: boolean;
    msg: string;
    code: number;
}
