import InvitationView from "@/components/InvitationView";

export default async function GuestPage({ params, searchParams }: { params: Promise<{ slug: string }>; searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  await params;
  const sp = await searchParams;
  const to = typeof sp.to === "string" ? sp.to : "";
  const tpl = typeof sp.tpl === "string" ? sp.tpl : "klasik";
  const pkg = typeof sp.pkg === "string" ? sp.pkg : "premium";
  const track = typeof sp.track === "string" ? sp.track : undefined;
  return <InvitationView templateId={tpl} guest={to} pkg={pkg} chosenTrack={track} />;
}
