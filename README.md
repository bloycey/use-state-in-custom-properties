# A hook for injecting your react state into CSS variables

This hook was inspired by [this article by Chris Coyier.](https://css-tricks.com/custom-properties-as-state/). This hook outputs a wrapper that passes state into a scoped CSS variable.

## Usage

The useStateInCustomProperties hook takes 2 arguments:
1. A class name for the wrapping div. (String)
2. An object containing the state names and values you'd like piped in as CSS variables. (Object)

```
import useStateInCustomProperties from "use-state-in-custom-properties";

const Example = () => {
  const [activeColor, setActiveColor] = useState("red");
  const CustomPropertiesWrapper = useStateInCustomProperties("box", { activeColor });

  return (
    <CustomPropertiesWrapper>
      <h1>Active Color: {activeColor}</h1>
	<button onClick={() => setActiveColor("red")}>
		Change to bed
	</button>
	<button onClick={() => setActiveColor("blue")}>
		Change to blue
	</button>
    <CustomPropertiesWrapper>
  )
}
```

And somewhere in a CSS file.

```
.box {
  background-color: var(--activeColor)
}
```

In the example above the background color will change as the relevant buttons are clicked. This is entirely dynamic and will update as your app updates. You can pass as many properties as you like into the hook.
