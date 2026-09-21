"use client";

import { useEffect } from "react";
import { trackEvent } from "@/components/analytics";

type ProjectViewTrackerProps = {
  projectName: string;
  projectSlug: string;
  projectCategory: string;
  projectIndex: string;
};

export function ProjectViewTracker({ projectName, projectSlug, projectCategory, projectIndex }: ProjectViewTrackerProps) {
  useEffect(() => {
    trackEvent("project_view", {
      project_name: projectName,
      project_slug: projectSlug,
      project_category: projectCategory,
      project_index: projectIndex,
    });
  }, [projectName, projectSlug, projectCategory, projectIndex]);

  return null;
}
