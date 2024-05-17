import app from "./app"
import { APP_PORT } from "./enviroments/enviroments"

app.listen(APP_PORT || 3333, () => {
    console.log(`Server is running on port ${APP_PORT}`)
})