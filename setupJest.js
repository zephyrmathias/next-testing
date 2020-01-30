import { configure } from 'enzyme'
import expect from 'expect'
import Adapter from 'enzyme-adapter-react-16'
import { toMatchDiffSnapshot } from 'snapshot-diff'

expect.extend({ toMatchDiffSnapshot })

configure({ adapter: new Adapter() })
