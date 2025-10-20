import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PrivacyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PrivacyModal = ({ open, onOpenChange }: PrivacyModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Política de Privacidade e LGPD</DialogTitle>
          <DialogDescription>
            Última atualização: Janeiro de 2025
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-sm">
            <section>
              <h3 className="font-bold text-lg mb-2">1. Introdução</h3>
              <p className="text-muted-foreground leading-relaxed">
                Esta Política de Privacidade descreve como o StudioAI coleta, usa, armazena 
                e protege suas informações pessoais, em conformidade com a Lei Geral de 
                Proteção de Dados (LGPD - Lei nº 13.709/2018).
              </p>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-2">2. Dados Coletados</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Coletamos as seguintes informações:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Dados de cadastro: nome, email, telefone (opcional)</li>
                <li>Fotos pessoais enviadas para processamento</li>
                <li>Informações de pagamento (processadas por parceiros seguros)</li>
                <li>Dados de uso: logs de acesso, preferências, interações na plataforma</li>
                <li>Dados técnicos: endereço IP, tipo de dispositivo, navegador</li>
              </ul>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-2">3. Base Legal e Finalidade</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Utilizamos seus dados com base legal em:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li><strong>Consentimento:</strong> Para processar suas fotos e criar ensaios profissionais</li>
                <li><strong>Execução de contrato:</strong> Para fornecer os serviços contratados</li>
                <li><strong>Interesse legítimo:</strong> Para melhorar nossos serviços e prevenir fraudes</li>
                <li><strong>Cumprimento legal:</strong> Para atender obrigações legais e fiscais</li>
              </ul>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-2">4. Como Usamos Seus Dados</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Processar e gerar suas fotos profissionais através de IA</li>
                <li>Gerenciar sua conta e autenticação</li>
                <li>Processar pagamentos e emitir notas fiscais</li>
                <li>Enviar notificações sobre seus ensaios e atualizações do serviço</li>
                <li>Melhorar nossos algoritmos e qualidade do serviço</li>
                <li>Prevenir fraudes e garantir a segurança da plataforma</li>
                <li>Cumprir obrigações legais</li>
              </ul>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-2">5. Compartilhamento de Dados</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Seus dados podem ser compartilhados apenas com:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Provedores de serviços de processamento de pagamento</li>
                <li>Serviços de hospedagem e armazenamento em nuvem</li>
                <li>Autoridades legais quando exigido por lei</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Nunca vendemos ou alugamos seus dados pessoais a terceiros.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-2">6. Armazenamento e Segurança</h3>
              <p className="text-muted-foreground leading-relaxed">
                Suas fotos e dados são armazenados em servidores seguros com criptografia. 
                Implementamos medidas técnicas e organizacionais para proteger suas informações 
                contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-2">7. Retenção de Dados</h3>
              <p className="text-muted-foreground leading-relaxed">
                Mantemos suas fotos armazenadas enquanto sua conta estiver ativa. 
                Dados de transações são mantidos pelo prazo legal exigido (5 anos). 
                Você pode solicitar a exclusão de suas fotos a qualquer momento.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-2">8. Seus Direitos (LGPD)</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                De acordo com a LGPD, você tem direito a:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Confirmação da existência de tratamento de dados</li>
                <li>Acesso aos seus dados pessoais</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados</li>
                <li>Anonimização, bloqueio ou eliminação de dados</li>
                <li>Portabilidade dos dados a outro fornecedor</li>
                <li>Eliminação dos dados tratados com seu consentimento</li>
                <li>Informação sobre compartilhamento de dados</li>
                <li>Revogação do consentimento</li>
              </ul>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-2">9. Cookies e Tecnologias</h3>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos cookies essenciais para funcionamento da plataforma e cookies 
                analíticos para melhorar a experiência do usuário. Você pode gerenciar 
                suas preferências de cookies nas configurações do navegador.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-2">10. Transferência Internacional</h3>
              <p className="text-muted-foreground leading-relaxed">
                Seus dados podem ser armazenados em servidores localizados fora do Brasil, 
                sempre com garantias adequadas de proteção conforme a LGPD.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-2">11. Menores de Idade</h3>
              <p className="text-muted-foreground leading-relaxed">
                Nossos serviços são destinados a maiores de 18 anos. Para usuários entre 
                13 e 18 anos, é necessário consentimento dos pais ou responsáveis legais.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-2">12. Alterações na Política</h3>
              <p className="text-muted-foreground leading-relaxed">
                Podemos atualizar esta política periodicamente. Mudanças significativas 
                serão comunicadas por email ou notificação na plataforma.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-2">13. Dados da Empresa</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Razão Social:</strong> BIGWORKS DESENVOLVIMENTO DE SISTEMAS E CONSULTORIA LTDA.<br />
                <strong>Nome Fantasia:</strong> BigWorks<br />
                <strong>CNPJ:</strong> 31.862.395/0001-65<br />
                <strong>Endereço:</strong> Teutônia/RS, Brasil
              </p>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-2">14. Contato e Encarregado de Dados</h3>
              <p className="text-muted-foreground leading-relaxed">
                Para exercer seus direitos ou esclarecer dúvidas sobre privacidade:
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                <strong>Email Geral:</strong> StudioAI@bigworks.com.br<br />
                <strong>Encarregado de Dados (DPO):</strong> lgpd@bigworks.com.br<br />
                <strong>Telefone/WhatsApp:</strong> +55 (48) 99838-6116
              </p>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-2">15. Autoridade Nacional de Proteção de Dados</h3>
              <p className="text-muted-foreground leading-relaxed">
                Você também pode contatar a ANPD (Autoridade Nacional de Proteção de Dados) 
                para questões relacionadas à proteção de dados pessoais.
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyModal;
