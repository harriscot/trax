export class Track {
  type: TrackType;
  orientation: TrackOrientation;
  position: [
    row: number,
    column: number
  ]

  constructor(type: TrackType,
    orientation: TrackOrientation,
    position: [row: number, column: number]) {
    this.type = type;
    this.orientation = orientation;
    this.position = position;
  }
}

export enum TrackType {
  straight,
  curved
}

export enum TrackOrientation {
  vertical = "v",
  horizontal = "h",
  topLeft = "tl",
  topRight = "tr",
  bottomLeft = "bl",
  bottomRight = "br"
}
