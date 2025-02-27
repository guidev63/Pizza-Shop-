import { match } from "assert"

export interface PaginationProps {
  pageIndex: number
  totalCount: number
  perPage: number
}

export function PaginationProps({ pageIndex, perPage, totalCount }: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1
  return (
    <div className=" flex items-center justify-between">
      <span className="text-sm text-muted-foreground"></span>
    </div>
  )
}
