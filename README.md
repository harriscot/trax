Train tracks challenge

This challenge is based on the popular Guardian puzzle, "Train tracks". In this puzzle, an 8 x 8 matrix is given, with two stations A and B that are always on the edge of the matrix. There are numbers along the top and right edges of the matrix. These numbers define how many track sections are present in the given row or column. Track sections may be curved (90 degrees) or straight. The challenge is to complete the route from A to B, while using the numbers of track sections defined in the puzzle. Tracks may not cross. 

The starting point for a puzzle may look like this...

![train tracks puzzle](img/tracks-puzzles.jpg)

A solved puzzle (a different one) might look like this...

![train tracks solution](img/tracks-solution.png)

Brainbashers.com has online puzzles. 

Carol Vorderman has written a guide. 

https://www.dailymail.co.uk/news/article-6934461/Carol-Vorderman-shows-tackle-fiendish-new-games.html

So, quite a popular thing on the internet. Can we come up with a really nice web based UI and underlying model to allow users to work on the puzzle? 

Aims
----
Build something appealing and fun. 
Learn a new coding language or framework. 
Build a simple interface that is analogous to the newspaper - the ability to enter data into it and mark it. 

Requirements
------------
Build a UI and back end. 
Work out the logic for the puzzle. 
Possibly store attempts in a JSON file or some such. 
Github. harriscot

1. Storage of seed data for each puzzle: row numbers, column numbers, starting positions and types of track. 
2. Storage of solution for each puzzle: coordinates and types of track. 
3. The ability to store multiple puzzles. 
4. Maybe the ability to generate new puzzles? 
5. User friendly interface for marking cells as blank, definite, possible, and for placing track pieces. 
6. Help mode? 
    6.1 Marking is done and displayed alongside the target numbers? 
7. The ability to save user progress and return to a game another time. 
8. The ability to store user performance - time to solve? League table?
9. (Advanced) auto-solve. 
10. UI to render the board in a nice, appealing way. 

Resources
---------

Done
----
Service returns list of puzzles and details of a selected puzzle. 
List of puzzles stored in JSON.

TODO
----
Store puzzle solutions in JSON. Started.
Load new game: format board and display starting tracks on it.
dropdown to select game
place starting tracks on board
build pallet of icons
drag and drop / click and select onto board cell.
Button to display solution
Display solution on board

NB 
Drag and drop
Following instructions from https://chatgpt.com/c/66e0b6b7-d068-8008-8632-ed0d4c845964

# Trax

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


