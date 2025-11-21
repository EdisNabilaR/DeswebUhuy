// Simple dummy data for creators used across the app
export const creators = [
  { id: 101, name: 'Seniman Hebat', rating: 5, bio: 'Painter & mixed-media artist from Bandung.' },
  { id: 102, name: 'Desainer Keren', rating: 4, bio: 'Graphic designer focusing on branding.' },
  { id: 103, name: 'Musisi Jenius', rating: 4, bio: 'Composer and music producer.' },
  { id: 104, name: 'Ilustrator Top', rating: 5, bio: 'Freelance illustrator for books and games.' },
  { id: 105, name: 'Penyanyi Handal', rating: 3, bio: 'Vocalist and songwriter.' },
  { id: 106, name: 'Komikus Kreatif', rating: 5, bio: 'Comic artist and storyteller.' },
  { id: 107, name: 'Fotografer Pro', rating: 4, bio: 'Portrait and commercial photographer.' },
  { id: 108, name: 'Animator Cepat', rating: 3, bio: '2D/3D animator and motion designer.' },
  // Weekly creators (lower ids) - optional duplicates for examples
  { id: 1, name: 'Creator A', rating: 4, bio: 'Weekly featured creator A.' },
  { id: 2, name: 'Creator B', rating: 5, bio: 'Weekly featured creator B.' },
  { id: 3, name: 'Creator C', rating: 3, bio: 'Weekly featured creator C.' },
  { id: 4, name: 'Creator D', rating: 4, bio: 'Weekly featured creator D.' },
]

export function findCreatorById(id) {
  const num = Number(id)
  return creators.find((c) => c.id === num)
}
