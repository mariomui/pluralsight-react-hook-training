* npm install -D eslint eslint-plugin-react-hooks prettier react-hooks react-performance
  * used to make sure react hooks are written correctly 
    * false positives are a lot.
* Scrollpic
  * how it works
    * major parts
      * index.js is the entry point
      * scroll pic is the scrolling component
        * has access to Complete dom of speaker pictures
      * imagesource is each individual portrait
    * data
      * Data handled by the Scrollpic component
        * data is mapped and listed via the Scrollpic gallerry
        * deprecated data
          * primaryRef
            * ref that refers to the container wrapping the potraits
            * is a function returned the useRefWithCallback customhook
            * a function placed inside ref will supply the ref.currrent to a callbackvalu
          * theNode
            * a state property that is set by handleCallback using the custom hook useRefwithCallback
              * the Node is either null or a dom object.
              * Avoids calling the contaner ref before its ended. 
            * this node will be ready when the container ref is ready.
          * theTrigger
            * a static counter that increments when the primaryRef callback fires.
            * when trigger increments from 0 to 1. That is when theNode is available.
          * handleCallback
            * i was thinking of calling this handlecallback so we would be able to access
            the container dom within the child imgsource but implementation became unwieldy.
            One of the problems is that you could only guarantee that the container node existed but not anything else where as having a trigger rerender the child made sure EVERYTHING existed without being placed inside the callback. 
        * primaryimg
          * black and white img (in bw folder)
        * secondaryimg
          * color img (in color) except 2 photos
        * windowTitle
          * houses the speakerId number
        * mouseEventCount
          * increments count
          * when states are being updated from prev to next state. 
          if prev and next state are the same, React proactively ignores the function render. A
          * so the existence of mouseEventCount triggers multiple calls in a useEffect.
      * Data handled by the imgsource component
        * imgRef
          * knows the position of portrait in relation to the view window
        * isLoading
          * a state property
          * on first load, the state is grey even if you are on top of it.
          so we have a property that renders our portrait invisible.
          A useffect which completes after render, ensuring our metadata is hydrated, we set is loading to false, that then renders the portrait.
    * logic
      * logic for Scrollpic
      * i'm too tired to write this out. writing the data and why its being setup actually descripbes the logic. 
      * in the future, writing out all the data, props that it passes, not props it recieves might be good for design.