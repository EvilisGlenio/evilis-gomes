# Configuração de Variáveis de Ambiente

## Resend API Key

Para que o formulário de contato funcione, é necessário configurar a API Key do Resend.

### Passos:

1. Crie uma conta no [Resend](https://resend.com) (plano gratuito disponível)
2. Acesse [API Keys](https://resend.com/api-keys) e crie uma nova chave
3. Crie um arquivo `.env.local` na raiz do projeto com o seguinte conteúdo:

```env
RESEND_API_KEY=re_your_api_key_here
```

Substitua `re_your_api_key_here` pela sua chave real do Resend.

### Nota sobre o email remetente

Por padrão, o código usa `onboarding@resend.dev` como remetente. Para usar um email customizado:

1. Verifique um domínio no Resend
2. Atualize o campo `from` em `app/api/contact/route.ts` para usar seu domínio verificado

Exemplo:
```typescript
from: "Portfolio Contact <contato@seudominio.com>",
```

