import Config from './DebugConfig'

if(Config.UseReactotron){
    const Reactotron = require('reactotron-react-js').default
    const { reactotronRedux } = require('reactotron-redux')

    Reactotron
        .configure({ name: 'That List' })
        .use(reactotronRedux())
        .connect()

    window.console.tron = Reactotron

}
