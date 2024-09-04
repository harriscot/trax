export interface Track {

  position: Position;
  shape: TrackShape;
  orientation: TrackOrientation;
  coordinates: [
    row: number,
    column: number
  ];

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
