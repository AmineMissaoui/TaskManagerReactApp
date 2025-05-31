type GreetingProps = {
  name: string;
};

const Greeting = ({ name }: GreetingProps) => {
  return <h2>Hello {name}</h2>;
};

export default Greeting;
