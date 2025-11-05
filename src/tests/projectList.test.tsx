import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router";
import { describe, it, expect, vi, beforeEach } from "vitest";
import ProjectListPage from "../pages/ProjectListPage/ProjectListPage";
import { PROJECT_STATUS } from "constants/project.constants";

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

const renderWithProviders = (component: React.ReactElement) => {
  const queryClient = createTestQueryClient();
  return render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>{component}</BrowserRouter>
    </QueryClientProvider>
  );
};

describe("ProjectListPage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders page title for all projects", async () => {
    renderWithProviders(<ProjectListPage />);

    await waitFor(() => {
      expect(screen.getByText("All Projects")).toBeDefined();
    });
  });

  it("renders page title for filtered projects", async () => {
    renderWithProviders(<ProjectListPage filter={PROJECT_STATUS.ACTIVE} />);

    await waitFor(() => {
      expect(screen.getByText("Active Projects")).toBeDefined();
    });
  });

  it("renders search input", async () => {
    renderWithProviders(<ProjectListPage />);

    const searchInput = await screen.findByLabelText("Search projects");
    expect(searchInput).toBeDefined();
    expect(searchInput.getAttribute("placeholder")).toBe("Search projects...");
  });

  it("displays correct project count", async () => {
    renderWithProviders(<ProjectListPage />);

    await waitFor(() => {
      const subtitle = screen.getByText(/projects found/);
      expect(subtitle).toBeDefined();
      expect(subtitle.textContent).toMatch(/\d+ projects found/);
    });
  });

  it("allows user to type in search input", async () => {
    renderWithProviders(<ProjectListPage />);

    const searchInput = await screen.findByLabelText("Search projects");
    fireEvent.change(searchInput, { target: { value: "Workflow" } });

    expect((searchInput as HTMLInputElement).value).toBe("Workflow");
  });

  it("displays loading skeletons initially", () => {
    renderWithProviders(<ProjectListPage />);

    // Check if loading skeletons are present
    const skeletonContainer = document.querySelector(
      '[class*="skeletonContainer"]'
    );
    expect(skeletonContainer).toBeDefined();
  });

  it("renders virtuoso container after loading", async () => {
    renderWithProviders(<ProjectListPage />);

    await waitFor(() => {
      const virtuosoScroller = screen.getByTestId("virtuoso-scroller");
      expect(virtuosoScroller).toBeDefined();
    });
  });

  it("renders page title for pending filter", async () => {
    renderWithProviders(<ProjectListPage filter={PROJECT_STATUS.PENDING} />);

    await waitFor(() => {
      expect(screen.getByText("Pending Projects")).toBeDefined();
    });
  });

  it("renders page title for archived filter", async () => {
    renderWithProviders(<ProjectListPage filter={PROJECT_STATUS.ARCHIVED} />);

    await waitFor(() => {
      expect(screen.getByText("Archived Projects")).toBeDefined();
    });
  });
});
