export interface SavedInvitation {
  slug: string; bride: string; groom: string; templateId: string; pkg: string; date: string; createdAt: string;
}
const KEY = "wedding-nextjs-invitations";
export function loadInvitations(): SavedInvitation[] {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(localStorage.getItem(KEY) ?? "[]") as SavedInvitation[]; } catch { return []; }
}
export function saveInvitation(inv: SavedInvitation) {
  const list = loadInvitations().filter((x) => x.slug !== inv.slug);
  list.unshift(inv);
  localStorage.setItem(KEY, JSON.stringify(list));
}
export function loadDraft(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try { return JSON.parse(localStorage.getItem("wedding-nextjs-draft") ?? "{}") as Record<string, string>; } catch { return {}; }
}
export function saveDraft(d: Record<string, string>) {
  localStorage.setItem("wedding-nextjs-draft", JSON.stringify(d));
}
