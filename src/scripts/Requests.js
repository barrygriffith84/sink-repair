import { getRequests, deleteRequest, saveCompletion, getPlumbers, getCompletions } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")


const CreateLiElement = (obj) => {
    const plumbers = getPlumbers()
    const completions = getCompletions()
let html;
if(completions.find(comp => comp.id === obj.id)){
 html =   `
    <li class="completedRequest">
        ${obj.description}
        <button class="request__delete"
        id="request--${obj.id}">
        Delete
    </button>
</li>
`
}else{
  html =  `
    <li>
        ${obj.description}
        <select class="plumbers" id="plumbers">
        <option value="">Choose</option>
        ${
            plumbers.map(
                plumber => {
                    return `<option value="${obj.id}--${plumber.id}">${plumber.name}</option>`
                }
            ).join("")
        }
    </select>        

    <button class="request__delete"
            id="request--${obj.id}">
            Delete
        </button>
    </li>
`}
return html

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

export const Completions = () => {
    const completions = getCompletions()

    let html = `
        <ul>
            ${
                completions.map(completedRequest => {
                    completedRequest.description
                }).join("")
            }
        </ul>
    `
    return html
}

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "plumbers") {
            const [requestId, plumberId] = event.target.value.split("--")

            /*
                This object should have 3 properties
                   1. requestId
                   2. plumberId
                   3. date_created
            */
            const completion = { 

                requestId: requestId,
                plumberId: plumberId,
                date_created: Date.now()
            }

            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */

                saveCompletion(completion);

                //Delete request
                //Print completions (need to store completions in transientState and get them)

        }
    }
)

