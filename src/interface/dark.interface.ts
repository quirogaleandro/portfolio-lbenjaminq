export interface Dark {
  dark: boolean
}

export interface Props extends Dark{
  handleClick: (e: React.MouseEvent) => void
}