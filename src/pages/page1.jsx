import Card from '../components/dom/Card';

const Page = (props) => {
  return (
    <div>
      <Card 
        title="This is my first project"
        image="../../../public/img/Outside-Foyer-sm.jpg"
        description="Test"
        link=""
      />
    </div>
  )
}

Page.r3f = (props) => (
  <>
  </>
)

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Page1',
    },
  }
}
