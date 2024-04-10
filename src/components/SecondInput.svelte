<script>
  import { secondNum } from '../stores/secondStore'

  const handleUpdate = (num) => {
    $secondNum = num
  }

</script>

<input
  type='number'
  name='secondNum'
  id='secondNum'
  min='0'
  max='10'
  on:change={(e) => handleUpdate(e.currentTarget.value)}
/>
