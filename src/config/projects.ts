export interface ProjectItem {
  slug: string
  title: string
  image: string
  tags: string[]
}

export const featuredProjects: ProjectItem[] = [
  {
    slug: "cazetv",
    title: "CazéTV",
    image: "https://portfolio.magui.studio/images/cazetv/project-cover.webp",
    tags: ["Streaming", "Esportes", "Entretenimento"],
  },
  {
    slug: "powervet",
    title: "POWERVET",
    image: "https://portfolio.magui.studio/images/powervet/project-cover.webp",
    tags: ["Veterinária", "Animais exóticos", "Agendamento"],
  },
  {
    slug: "arco-odontologia",
    title: "ARCO",
    image: "https://portfolio.magui.studio/images/arco/project-cover.webp",
    tags: ["Odontologia", "Sorriso", "Agendamento"],
  },
  {
    slug: "flow",
    title: "FLOW",
    image: "https://portfolio.magui.studio/images/flow/project-cover.webp",
    tags: ["Aquarismo marinho", "Reef", "Corais"],
  },
  {
    slug: "haven",
    title: "HAVEN",
    image: "https://portfolio.magui.studio/images/haven/project-cover.webp",
    tags: ["Inclusao", "Autismo", "Atendimento humanizado"],
  },
  {
    slug: "flora",
    title: "Flora",
    image: "https://portfolio.magui.studio/images/flora/project-cover.webp",
    tags: ["Plantas ornamentais", "Garden center", "Decoração natural"],
  },
]
