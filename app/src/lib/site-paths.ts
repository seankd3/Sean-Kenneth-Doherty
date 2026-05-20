const githubPagesBasePath =
  process.env.GITHUB_ACTIONS === 'true' ? '/Sean-Kenneth-Doherty' : '';
const siteBasePath =
  process.env.NEXT_PUBLIC_SITE_BASE_PATH || githubPagesBasePath;

export function withBasePath(path: string): string {
  if (!path.startsWith('/')) {
    return path;
  }

  return `${siteBasePath}${path}`;
}
