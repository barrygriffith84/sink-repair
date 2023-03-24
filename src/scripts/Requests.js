import { getRequests } from "./dataAccess.js"

const CreateLiElement = (obj) => {
    return          `<li>
                        ID: ${obj.id},<br>
                        Description: ${obj.description},<br>
                        Address: ${obj.address},<br>
                        Budget: ${obj.budget},<br>
                        Needed By: ${obj.neededBy}
                    </li>` 
}

export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${
                requests.map(CreateLiElement).join("")
            }
        </ul>
    `

    return html
}

