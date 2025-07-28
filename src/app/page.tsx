export default function Home() {
    return (
      <main className="p-6">
        <h1 className="text-4xl font-bold mb-6">DevOps Learning Pathway</h1>
        <ul className="list-disc pl-6 space-y-2">
          <li>🟢 Beginner: Linux, Networking, Git, Docker, Cloud</li>
          <li>🟡 Intermediate: Kubernetes, Terraform, Monitoring</li>
          <li>🔴 Advanced: Security, SRE, GitOps, Service Mesh</li>
        </ul>
      </main>
    );
  }