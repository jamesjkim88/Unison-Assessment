# Unison Assessment

### Tech stack used:
  - Vanilla JavaScript
  - HTML 5

### Approach
  - Used MVC design pattern to build the application.
  - Firstly, wanted to make sure I get the json file and able to have access to the object once json file is submitted.
  - After having access, it was obvious to iterate through the object but required some brainstorming sessions on handling nested children elements.
  - Applied recursion function for a solution to handle nested children.

### Tasks and Features
  - Loop through the object and create & append top level html element.
  - Check if parent element has children and/or props
    - check if children is an array or a string
      - if children is an array
        - iterate through the children array and create element and append necessary content
      - if children has props object
        - set the attributes
      - if children has nested children
        - apply recursion function
  - Future features:
    - Implement validations for JSON file.
    - Extra credit work applying drag and drop on the html elements 
