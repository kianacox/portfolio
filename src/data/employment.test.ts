import { employmentHistory, EmploymentEntry, Skill } from './employment';

describe('employmentHistory', () => {
  test('exports 4 employment entries', () => {
    expect(employmentHistory).toHaveLength(4);
  });

  test('each entry has required string fields', () => {
    employmentHistory.forEach((entry: EmploymentEntry) => {
      expect(typeof entry.id).toBe('string');
      expect(entry.id.length).toBeGreaterThan(0);
      expect(typeof entry.title).toBe('string');
      expect(entry.title.length).toBeGreaterThan(0);
      expect(typeof entry.company).toBe('string');
      expect(entry.company.length).toBeGreaterThan(0);
      expect(typeof entry.description).toBe('string');
      expect(entry.description.length).toBeGreaterThan(0);
      expect(typeof entry.date).toBe('string');
      expect(entry.date.length).toBeGreaterThan(0);
    });
  });

  test('each entry has at least one skill', () => {
    employmentHistory.forEach((entry: EmploymentEntry) => {
      expect(entry.skills.length).toBeGreaterThan(0);
    });
  });

  test('each skill has a name string and callable icon', () => {
    employmentHistory.forEach((entry: EmploymentEntry) => {
      entry.skills.forEach((skill: Skill) => {
        expect(typeof skill.name).toBe('string');
        expect(skill.name.length).toBeGreaterThan(0);
        expect(typeof skill.icon).toBe('function');
      });
    });
  });

  test('exactly one entry is the Present Role', () => {
    const presentRoles = employmentHistory.filter((entry) => entry.date.includes('Present'));
    expect(presentRoles).toHaveLength(1);
  });

  test('Present Role is first in the array', () => {
    expect(employmentHistory[0].date).toContain('Present');
  });

  test('all entry ids are unique', () => {
    const ids = employmentHistory.map((entry) => entry.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(employmentHistory.length);
  });
});
