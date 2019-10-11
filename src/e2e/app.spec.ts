import { Application } from 'spectron'
import path from 'path'

let app: Application | null
describe('Test with spectron', function() {
  beforeEach(async () => {
    app = new Application({
      path: path.resolve(__dirname, '..', '..', 'dist/mac/Aether Manga.app/Contents/MacOs/Aether Manga')
    })

    await app.start()
  })

  afterEach(async () => {
    if (app && app.isRunning()) {
      await app.stop()
    }
  })

  it('should start the app', async () => {
    if (app) {
      const isVisible = await app.browserWindow.isVisible()
      const count = await app.client.getWindowCount()
      expect(isVisible).toBe(true)
      expect(count).toBe(1)
      return true
    }

    return false
  })

  it('should have the correct title', async () => {
    if (app) {
      const title = await app.browserWindow.getTitle()
      expect(title).toBe('React App')
    }
  })
})
