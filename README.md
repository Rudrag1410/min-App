# React Mini-App Assessment

A modern React 18+ mini-dashboard application built with Vite, TypeScript, and best practices.

## Features

- ✅ **Project List**: Browse all projects with virtualized scrolling
- ✅ **Search Filter**: Real-time search using React Hook Form
- ✅ **Project Details**: View detailed information for each project
- ✅ **Custom Hook**: `useProjects()` for data fetching with TanStack Query
- ✅ **Accessibility**: ARIA attributes for screen reader support
- ✅ **Type-Safe**: Full TypeScript coverage
- ✅ **Modern UI**: Clean black & white theme with CSS Modules
- ✅ **Tested**: Vitest + React Testing Library

## Tech Stack

- **React 18+** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Router** - Client-side routing
- **TanStack Query** - Server state management
- **React Hook Form** - Form state management
- **React Virtuoso** - Virtualized list rendering
- **CSS Modules** - Scoped styling
- **Vitest** - Testing framework
- **React Testing Library** - Component testing

## Project Structure

```
src/
  app/
    App.tsx                    # Root app component
    DashboardApp.tsx          # App with providers
    DashboardRoutes.tsx       # Route definitions
  components/
    ProjectCard.tsx           # Project card component
    ProjectCard.module.css    # Card styles
    SearchInput.tsx           # Search input component
    SearchInput.module.css    # Search input styles
  constants/
    project.constants.ts      # App constants
  hooks/
    useProjects.ts           # Custom data fetching hook
  pages/
    ProjectListPage.tsx      # List page with search
    ProjectListPage.module.css
    ProjectDetailsPage.tsx   # Detail page
    ProjectDetailsPage.module.css
  services/
    projectService.ts        # Mock data service
  styles/
    theme.css                # CSS variables
    global.css               # Global styles
  types/
    project.types.ts         # TypeScript types
  utils/
    filterProjects.ts        # Filter utility
  tests/
    projectList.test.tsx     # Component tests
    setup.ts                 # Test setup
  main.tsx                   # App entry point
  index.css                  # Base styles
```

## Getting Started

### Install Dependencies

```bash
yarn install
```

### Run Development Server

```bash
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
yarn build
```

### Preview Production Build

```bash
yarn preview
```

### Run Tests

```bash
yarn test
```

## Key Features

### Custom Hook

The `useProjects()` hook demonstrates TanStack Query integration:

```typescript
export const useProjects = () => {
  return useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: getProjects,
  });
};
```

### Search Functionality

Search is implemented using React Hook Form for controlled input:

```typescript
const { register, watch } = useForm<SearchForm>({
  defaultValues: { search: "" },
});

const searchQuery = watch("search");
const filteredProjects = filterProjects(projects, searchQuery);
```

### Virtualized List

React Virtuoso provides efficient rendering for large lists:

```typescript
<Virtuoso
  data={filteredProjects}
  itemContent={(_index, project) => <ProjectCard project={project} />}
/>
```

### Accessibility

All interactive elements include ARIA attributes:

```typescript
<div aria-label="Project list">
  {/* content */}
</div>
```

## Mock Data

The app uses local mock data defined in `src/services/projectService.ts`:

- Workflow Builder (Active)
- Customer Portal (Pending)
- Notification System (Archived)

## Theme

Single black & white theme with CSS variables:

- Background: `#ffffff`
- Text: `#000000`
- Card Background: `#f8f8f8`
- Border: `#e2e2e2`
- Accent: `#000000`

## Testing

Tests are written using Vitest and React Testing Library:

```bash
yarn test
```

Example test:

```typescript
it("renders project list", async () => {
  renderWithProviders(<ProjectListPage />);
  const projectList = await screen.findByLabelText("Project list");
  expect(projectList).toBeDefined();
});
```

## Routes

- `/` - Project list page with search
- `/projects/:id` - Project details page

## License

MIT
# Mini-App
# Mini-App
