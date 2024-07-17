# Expense Tracker v0.1
7/16/24

## Features:
Add/Remove an expense
Create/Remove categories 
Record income
Display Income vs Expenses 
Store data in local storage
Records the expense date and displays on a calendar (Maybe)

## Add/Remove An Expense (ARE)
Expenses will be summed up and displayed in a bar graph that compares expenses to income. 
Default expenses:
Gas
Electricity 
Water
Mortgage payment
Food
Car payment 

### ARE Implementation
Backend: 
The expense number will be saved as type double and the expense name will be saved as a string in a map with the expense name as the key.
When the user creates a new expense they will be prompted for an expense name and amount. 
When the user removes an expense that expense will be removed from the map. If the expense has been added to a category, then it will also be removed from the category set.  
	Frontend:
The expenses will be displayed in a list with the format Category ; Name ; Expense. (Category only appears if the user has added expense to the category.)   
There will be either an edit button that after clicking, on the left will display subtraction marks next to each expense. If the subtraction button is clicked then the expense will be removed from the list. 

## Create/Remove Categories (CRC)
Default categories:
Travel
Health
Entertainment 
Shopping 
Food

### CRC Implementation
  Backend:
Each category will be created as a set of type string that will store the names of each expense added to that category. 
When a category is deleted the set will be deleted. 
When users add an expense to a category the expense name is inserted into the selected category’s set. 
	Frontend:
Similar to editing expenses, there will be an edit button that brings up red subtraction buttons next to each category when clicked. If a user deletes a category then every expense in the deleted category needs to be updated accordingly. 
When a user creates a new category a new set will be created. 

## Record Income (RI)
Users will be able to input their income and have it displayed immediately in a bar graph. Income will be compared with total expenses. 

### RI Implementation 
Backend:
After the user inputs their income it will be saved as a double into a variable. 
Frontend:
There will be a textbox with the label “Annual Income” which will update as the user types in there annual income. 
The income will be immediately displayed in the bar graph. 

## Displaying Income vs Expenses (DIE)
As users input their income/expenses a bar graph will update accordingly to display their data accurately. 

### DIE Implementation
  Frontend Backend:
I haven’t decided on how to implement this part yet. Will probably make use of the KendoReact Charts library. 
Saving Data in Local Storage
The data users enter will be saved locally using localstorage. (May need to switch from localstorage to a database, because if the user clears their cache then their data is lost.) 
 
NOTE: localstorage can only store strings, so everything will need to be converted to a string.

