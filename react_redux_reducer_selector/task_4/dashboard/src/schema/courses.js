import { normalize, schema } from 'normalizr';

// entities
const course = new schema.Entity('courses');

// coursesNormalizer - normalize course data
export const coursesNormalizer = (data) => {
  const normalizedData = normalize(data, [course]);
  return normalizedData;
}