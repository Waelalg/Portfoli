export const updateMetaTags = (title, description, url) => {
  document.title = `${title} | Wael Ouail Lebaili - Full Stack Developer`

  let metaDescription = document.querySelector("meta[name='description']")
  if (!metaDescription) {
    metaDescription = document.createElement("meta")
    metaDescription.name = "description"
    document.head.appendChild(metaDescription)
  }
  metaDescription.content = description

  let canonical = document.querySelector("link[rel='canonical']")
  if (!canonical) {
    canonical = document.createElement("link")
    canonical.rel = "canonical"
    document.head.appendChild(canonical)
  }
  canonical.href = `https://www.wael-dev.me${url}`

  updateOpenGraphTag("og:title", title)
  updateOpenGraphTag("og:description", description)
  updateOpenGraphTag("og:url", `https://www.wael-dev.me${url}`)
}

export const updateOpenGraphTag = (property, content) => {
  let tag = document.querySelector(`meta[property='${property}']`)
  if (!tag) {
    tag = document.createElement("meta")
    tag.setAttribute("property", property)
    document.head.appendChild(tag)
  }
  tag.content = content
}

export const getProjectSchema = (project) => {
  return {
    "@context": "https://schema.org/",
    "@type": "SoftwareSourceCode",
    name: project.name,
    description: project.description,
    url: project.liveLink || project.githubLink,
    codeRepository: project.githubLink,
    programmingLanguage: Array.isArray(project.languages) ? project.languages : [project.languages],
    author: {
      "@type": "Person",
      name: "Wael Ouail Lebaili",
      alternateName: ["Wael", "Ouail", "Lebaili", "Mohamed Ouail"],
      url: "https://www.wael-dev.me",
    },
    dateCreated: project.dateCreated || new Date().toISOString().split("T")[0],
    keywords: "full stack development, React, Node.js, web development, portfolio",
  }
}

export const injectProjectSchema = (projects) => {
  projects.forEach((project) => {
    const schema = getProjectSchema(project)
    const scriptTag = document.createElement("script")
    scriptTag.type = "application/ld+json"
    scriptTag.textContent = JSON.stringify(schema)
    document.head.appendChild(scriptTag)
  })
}
