import { getRequests } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${
                requests.map(request => {
                    return `<li>
                        ID: ${request.id},<br>
                        Description: ${request.description},<br>
                        Address: ${request.address},<br>
                        Budget: ${request.budget},<br>
                        Needed By: ${request.neededBy}
                    </li>`
                }).join("")
            }
        </ul>
    `

    return html
}