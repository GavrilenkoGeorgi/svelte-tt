<script>
  import { derived } from 'svelte/store'
  import { firstNum } from '../stores/firstStore'
  import { secondNum } from '../stores/secondStore'
  import { thirdNum } from '../stores/thirdStore'

  import FirstInput from './FirstInput.svelte'
  import SecondInput from './SecondInput.svelte'
  import ThirdInput from './ThirdInput.svelte'

  const result = derived([firstNum, secondNum, thirdNum], ([$firstNum, $secondNum, $thirdNum]) => {
    return parseInt($firstNum) + parseInt($secondNum) + parseInt($thirdNum)
  })

</script>

<form> <!-- style this -->
  <FirstInput />
  <SecondInput />
  <ThirdInput />
</form>

<div>
  Derived from three stores: {$result}
</div>
