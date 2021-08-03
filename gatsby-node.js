const path = require('path')
exports.createPages = async ({graphql, actions}) => {
    //Project Pages
    const pData = await graphql(`
        query AllProjects { 
            allProjectsJson {
                nodes {
                    slug
                    contributors {
                        TEmentors
                        SEmentees
                        BEmentors
                    }
                }
            }
        }
    `)


    pData.data.allProjectsJson.nodes.forEach(node => {
        actions.createPage({
            path: '/projects/'+node.slug,
            component: path.resolve('./src/templates/ProjectDetails.js'),
            context: {slug: node.slug, TEmentors: node.contributors.TEmentors, BEmentors: node.contributors.BEmentors, SEmentees: node.contributors.SEmentees}
        })
    })

    const eData = await graphql(`
        query AllEvents { 
            allEventsJson {
                nodes {
                    title
                }
            }
        }
    `)
    eData.data.allEventsJson.nodes.forEach(node => {
        actions.createPage({
            path: '/events/'+node.title,
            component: path.resolve('./src/templates/EventDetails.js'),
            context: {title: node.title}
        })
    })

}