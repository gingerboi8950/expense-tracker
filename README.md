---

# Expense Tracker v0.1

**Started:** 7/16/24

This Expense Tracker application allows users to manage their financial data through adding/removing expenses, categorizing expenses, recording income, and visualizing income vs. expenses through a bar graph. Data is stored locally on the user’s device for easy access.

---

## WIP Features
- **Add/Remove an Expense**: Input custom expenses, or select from defaults (Gas, Electricity, Water, Mortgage, Food, Car Payment).
- **Create/Remove Categories**: Add expenses to specific categories (default categories: Travel, Health, Entertainment, Shopping, Food).
- **Record Income**: Store and display annual income.
- **Income vs. Expense Display**: Visualize and compare income against expenses in a bar graph.
- **Local Storage**: Save all data locally for convenient retrieval on the same device.
- **Expense Date Tracking (Optional)**: Potential to track and display expense dates on a calendar view.

---

## Functionalities & Implementation Details

### Add/Remove An Expense 
Users can manage individual expenses, which are totaled and visualized.
- **Backend**: Each expense is stored in a map, with `expense name` as the key and `amount` as the value.
- **Frontend**: Expenses are displayed in a list format (`Category ; Name ; Expense`). Users can edit expenses through a subtraction button to remove selected entries.

### Create/Remove Categories 
Organize expenses into categories for better management.
- **Backend**: Categories are saved as sets of expense names for easy categorization and deletion.
- **Frontend**: An edit button enables deletion of categories, updating related expenses accordingly. New categories are created as individual sets.

### Record Income 
Users can input and display their income instantly in the bar graph.
- **Frontend**: A labeled textbox ("Annual Income") allows users to type and immediately update their annual income in the graph.

### Displaying Income vs Expenses 
A bar graph provides a real-time view of income and expenses.
- **Backend & Frontend**: Graph display is to be implemented, potentially using the KendoReact Charts library.

### Data Storage
All input data is saved in the browser’s local storage as strings to maintain data persistence across sessions. In future versions, storage may shift to a database to prevent data loss when the cache is cleared.

--- 

