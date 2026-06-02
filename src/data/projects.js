const projects = [
  {
    title: "InternConnect Platform",
    description:
      "A platform connecting students with internship opportunities. Features include company listings, student profiles, application tracking, and real-time notifications.",
    tech: ["React", "Node.js", "Express", "MySQL"],
    github: "https://github.com/gilberas/internconnect",
    status: "In Progress",
    screenshot: null, // replace with: "/screenshots/internconnect.png"
    features: [
      { label: "Student registration & profiles", done: true },
      { label: "Company listings", done: true },
      { label: "Internship application tracking", done: true },
      { label: "Real-time notifications", done: false },
      { label: "Admin dashboard", done: false },
    ],
  },
  {
    title: "E-Commerce System",
    description:
      "A modern e-commerce platform with product catalog, shopping cart, secure checkout, and order management dashboard.",
    tech: ["React", "Laravel", "MySQL"],
    github: "https://github.com/gilberas/e-commerce",
    status: "In Progress",
    screenshot: null, // replace with: "/screenshots/ecommerce.png"
    features: [
      { label: "Product catalog", done: true },
      { label: "Shopping cart", done: true },
      { label: "Secure checkout", done: false },
      { label: "Order management dashboard", done: false },
      { label: "Payment integration", done: false },
    ],
  },
  {
    title: "School Management System",
    description:
      "A comprehensive school administration system handling student enrollment, attendance, exams, results, fee collection, timetables, and role-based access.",
    tech: ["Laravel", "Livewire", "MySQL", "Flux UI"],
    github: "https://github.com/gilberas/school-management-system",
    status: "In Progress",
    screenshot: null, // replace with: "/screenshots/school.png"
    features: [
      { label: "Student enrollment", done: true },
      { label: "Attendance tracking", done: true },
      { label: "Exam & results management", done: true },
      { label: "Fee collection", done: false },
      { label: "Timetable management", done: false },
      { label: "Role-based access (admin, teacher, parent)", done: false },
    ],
  },
  {
    title: "InventoryPro",
    description:
      "A stock management system for tracking inventory across multiple locations. Features include purchase orders, stock levels, expiry tracking, and supplier management.",
    tech: ["Laravel", "Livewire", "MySQL", "Flux UI"],
    github: "https://github.com/gilberas/inventory",
    status: "In Progress",
    screenshot: null, // replace with: "/screenshots/inventorypro.png"
    features: [
      { label: "Stock level tracking", done: true },
      { label: "Multi-location support", done: true },
      { label: "Purchase orders", done: true },
      { label: "Expiry date tracking", done: false },
      { label: "Supplier management", done: false },
      { label: "Low stock alerts", done: false },
    ],
  },
]

export default projects