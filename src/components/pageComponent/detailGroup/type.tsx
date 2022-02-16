export interface ReportProps {
    id?: number,
    key?: string | number,
    title?: string
}

export interface MemberProps {
    id: number | string,
    name: string
}

export interface ToolProps {
    id: number,
    key: string | number,
    title: string,
    children?: ReportProps[],
   
}

export interface DetailGroupProps {
    
}