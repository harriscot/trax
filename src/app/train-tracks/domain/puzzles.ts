export interface Root {
  puzzles: Puzzles
}

export interface Puzzles {
  puzzle: Puzzle[]
}

export interface Puzzle {
  "problem-number"?: string
  "number-of-rows"?: number
  "number-of-columns"?: number
  "x-axis-counts"?: Count[]
  "y-axis-counts"?: Count2[]
  "starting-tracks"?: Track[]
}

export interface Count {
  col0: number
  col1: number
  col2: number
  col3: number
  col4: number
  col5: number
  col6: number
  col7: number
}

export interface Count2 {
  row0: number
  row1: number
  row2: number
  row3: number
  row4: number
  row5: number
  row6: number
  row7: number
}

export interface Track {
  type: string
  position: Position[]
  "track-type": TrackType[]
}

export interface Position {
  row: number
  column: number
}

export interface TrackType {
  curvature: string
  orientation: string
}
