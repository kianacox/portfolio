import { projects, ProjectEntry } from './projects';

describe('projects', () => {
  test('exports 3 project entries', () => {
    expect(projects).toHaveLength(3);
  });

  test('each entry has required string fields', () => {
    projects.forEach((project: ProjectEntry) => {
      expect(typeof project.title).toBe('string');
      expect(project.title.length).toBeGreaterThan(0);
      expect(typeof project.description).toBe('string');
      expect(project.description.length).toBeGreaterThan(0);
      expect(typeof project.image).toBe('string');
      expect(project.image.length).toBeGreaterThan(0);
      expect(typeof project.link).toBe('string');
      expect(project.link.length).toBeGreaterThan(0);
      expect(typeof project.github).toBe('string');
    });
  });

  test('exactly one entry is a Private Repo', () => {
    const privateRepos = projects.filter((project) => project.github === '');
    expect(privateRepos).toHaveLength(1);
  });

  test('all titles are unique', () => {
    const titles = projects.map((project) => project.title);
    const uniqueTitles = new Set(titles);
    expect(uniqueTitles.size).toBe(projects.length);
  });
});
