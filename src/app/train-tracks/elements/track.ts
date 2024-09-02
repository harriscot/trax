export class Track {
  position: Position;
  shape: TrackShape;
  orientation: TrackOrientation;
  coordinates: [
    row: number,
    column: number
  ]

  constructor(
    position: Position,
    shape: TrackShape,
    orientation: TrackOrientation,
    coordinates: [row: number, column: number]) {
      this.position = position;
      this.shape = shape;
      this.orientation = orientation;
      this.coordinates = coordinates;
  }
}

export enum TrackShape {
  straight = "straight",
  curved = "curved"
}

export enum Position {
  start = "start",
  intermediate = "intermediate",
  end = "end"
}

export enum TrackOrientation {
  vertical = "V",
  horizontal = "H",
  topLeft = "TL",
  topRight = "TR",
  bottomLeft = "BL",
  bottomRight = "BR"
}
