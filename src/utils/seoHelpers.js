// SEO Helper functions to dynamically update meta tags
export const updateMetaTags = (title, description, url) => {
  // Update title
  document.title = `${title} | Wael - Full Stack Developer`

  // Update or create meta description
  let metaDescription = document.querySelector("meta[name='description']")
  if (!metaDescription) {
    metaDescription = document.createElement("meta")
    metaDescription.name = "description"
    document.head.appendChild(metaDescription)
  }
  metaDescription.content = description

  // Update canonical URL
  let canonical = document.querySelector("link[rel='canonical']")
  if (!canonical) {
    canonical = document.createElement("link")
    canonical.rel = "canonical"
    document.head.appendChild(canonical)
  }
  canonical.href = url

  // Update Open Graph tags
  updateOpenGraphTag("og:title", title)
  updateOpenGraphTag("og:description", description)
  updateOpenGraphTag("og:url", url)
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

// Rich snippet data for projects
export const getProjectSchema = (project) => {
  return {
    "@context": "https://schema.org/",
    "@type": "SoftwareSourceCode",
    name: project.name,
    description: project.description,
    url: project.liveLink,
    codeRepository: project.githubLink,
    programmingLanguage: project.languages,
    author: {
      "@type": "Person",
      name: "Wael",
    },
  }
}
