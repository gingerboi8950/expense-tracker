Here's a README for your Expense Tracker v0.1 GitHub repository:

---

# Expense Tracker v0.1

**Started:** 7/16/24

This Expense Tracker application allows users to manage their financial data through adding/removing expenses, categorizing expenses, recording income, and visualizing income vs. expenses through a bar graph. Data is stored locally on the user’s device for easy access.

---

## Features
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
- **Backend**: Each expense is stored in a map, with `expense name` as the key and `amount` as a double.
- **Frontend**: Expenses are listed as `Category ; Name ; Expense`. Users can edit expenses via a subtraction button that removes selected entries.

### Create/Remove Categories 
Organize expenses into categories for better management.
- **Backend**: Categories are saved as sets of expense names, allowing easy categorization and deletion.
- **Frontend**: An edit button enables deletion of categories, updating related expenses accordingly. New categories are created as individual sets.

### Record Income 
Input and display user income instantly in the bar graph.
- **Backend**: Income is stored as a double variable.
- **Frontend**: A labeled textbox ("Annual Income") allows users to type and immediately update their annual income in the graph.

### Displaying Income vs Expenses 
A bar graph provides a real-time view of income and expenses.
- **Backend & Frontend**: Graph display is to be implemented, potentially using the KendoReact Charts library.

### Data Storage
All input data is stored in the browser’s local storage as strings. This may shift to database storage in future versions to prevent data loss on cache clear.

