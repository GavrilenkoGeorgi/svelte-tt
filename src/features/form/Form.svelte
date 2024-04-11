<script>
  import * as m from '$lib/paraglide/messages'
  import { derived } from 'svelte/store'
  import { firstNum } from '$lib/firstStore'
  import { secondNum } from '$lib/secondStore'
  import { thirdNum } from '$lib/thirdStore'

  import FirstInput from './FirstInput.svelte'
  import SecondInput from './SecondInput.svelte'
  import ThirdInput from './ThirdInput.svelte'

  const result = derived([firstNum, secondNum, thirdNum], ([$firstNum, $secondNum, $thirdNum]) => {
    return parseInt($firstNum) + parseInt($secondNum) + parseInt($thirdNum)
  })

</script>

<form class='form'>
  <FirstInput />
  <SecondInput />
  <ThirdInput />
</form>

<div class='results'>
  {m.storeCalcResult()} {$result}
</div>

<style>
  .form {
    display: flex;
    justify-content: center;
  }
  .results {
    text-align: center;
    margin-top: 1rem;
  }
</style>
