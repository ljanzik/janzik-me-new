import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@shared/routes";
import type { InsertMessage } from "@shared/schema";

function parseWithLogging<T>(schema: any, data: unknown, label: string): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    console.error(`[Zod] ${label} validation failed:`, result.error.format());
    throw result.error;
  }
  return result.data;
}

export function useExperiences() {
  return useQuery({
    queryKey: [api.experiences.list.path],
    queryFn: async () => {
      const res = await fetch(api.experiences.list.path);
      if (!res.ok) throw new Error("Failed to fetch experiences");
      const data = await res.json();
      return parseWithLogging(api.experiences.list.responses[200], data, "experiences.list");
    }
  });
}

export function useSkills() {
  return useQuery({
    queryKey: [api.skills.list.path],
    queryFn: async () => {
      const res = await fetch(api.skills.list.path);
      if (!res.ok) throw new Error("Failed to fetch skills");
      const data = await res.json();
      return parseWithLogging(api.skills.list.responses[200], data, "skills.list");
    }
  });
}

export function useProjects() {
  return useQuery({
    queryKey: [api.projects.list.path],
    queryFn: async () => {
      const res = await fetch(api.projects.list.path);
      if (!res.ok) throw new Error("Failed to fetch projects");
      const data = await res.json();
      return parseWithLogging(api.projects.list.responses[200], data, "projects.list");
    }
  });
}

export function useBlogPosts() {
  return useQuery({
    queryKey: ["/api/blog"],
    queryFn: async () => {
      const res = await fetch("/api/blog");
      if (!res.ok) throw new Error("Failed to fetch blog posts");
      return res.json();
    }
  });
}

export function useBlogPost(slug: string) {
  return useQuery({
    queryKey: ["/api/blog", slug],
    queryFn: async () => {
      const res = await fetch(`/api/blog/${slug}`);
      if (!res.ok) throw new Error("Failed to fetch blog post");
      return res.json();
    },
    enabled: !!slug
  });
}

export function useCreateMessage() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: InsertMessage) => {
      const validated = api.messages.create.input.parse(data);
      const res = await fetch(api.messages.create.path, {
        method: api.messages.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });
      if (!res.ok) {
        if (res.status === 400) {
          const error = api.messages.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to send message");
      }
      return api.messages.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      // In a real app we might invalidate a list of messages if there was an admin panel
      queryClient.invalidateQueries({ queryKey: [api.messages.create.path] });
    }
  });
}
