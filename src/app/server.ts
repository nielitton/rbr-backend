import app from "./app"
import { PORT } from "./enviroments/enviroments"

app.listen(PORT || 3333, () => {
    console.log(`Server is running on port ${PORT}`)
})