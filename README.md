
## GadgetHeaven ✨

### Live Website
[GadgetHeaven Live](https://gadget-bd.surge.sh/)

### Requirement Document
[Requirement Document Link](https://github.com/ProgrammingHero1/B10-A8-gadget-heaven)

### Project Overview
GadgetHeaven is a responsive e-commerce platform for discovering, browsing, and purchasing the latest gadgets. The site is designed with a focus on seamless navigation, efficient data handling, and an engaging UI. The application includes a well-structured navigation bar, dynamic product categories, individual product detail pages, and essential functionalities like a shopping cart, wishlist, and product filtering.

### Features
#### Navigation: 
Structured navbar with routes for Home, Dashboard, and Stats.
#### Home Page:
Displays a banner, category sidebar, and gadget cards with at least 10 unique products. Each category features different items.
#### Details Page: 
Product-specific information, add-to-cart and wishlist buttons with custom icons.
#### Dashboard Page: 
Two tabs for managing Cart and Wishlist items.
Cart and Wishlist Management: Toast notifications for adding items to each.
#### Sorting and Filtering: 
Sort cart items by price and filter products by category.
#### Dynamic Titles and Favicon: 
Unique page titles and site icon for brand consistency.

### Tech Stack
React for component-based UI.
#### LocalStorage: 
To retain cart and wishlist data across sessions.
#### React Router: 
For page navigation and error handling.
Tailwind CSS and DaisyUI for modern, responsive styling.
useLocation & useNavigate Hooks: For dynamic styling and modal navigation.
LocalStorage for cart and wishlist is saved and loaded from LocalStorage..

### Challenges
#### Cart and Wishlist Functionality: 
Implementing robust add/remove logic for cart and wishlist items.
#### LocalStorage Data Handling: 
Managing data in LocalStorage to persist cart and wishlist items.
#### Total Price Calculation: 
Summing all item prices in the cart to display the total cost dynamically.
#### Custom Titles: 
Adding a unique title to each page for improved user experience.
Product Statistics: Displaying a visual representation of products based on their price and category.
#### Unexpected Issues in VS Code: 
Encountered critical issues with VS Code in the middle of the project, which required restarting the setup.


### Miscellaneous
#### 404 Page: 
Custom error page.
#### Modals & Notifications: 
Inform users on actions and purchases.
#### Dynamic Title & Favicon: 
Each page has a unique title, and the site uses a favicon for branding.