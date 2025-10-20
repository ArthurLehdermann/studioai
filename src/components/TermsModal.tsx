import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TermsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TermsModal = ({ open, onOpenChange }: TermsModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Termos de Uso</DialogTitle>
          <DialogDescription>
            Última atualização: Janeiro de 2025
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-sm">
            <section>
              <h3 className="font-bold text-lg mb-2">1. Aceitação dos Termos</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ao acessar e utilizar o StudioAI, você concorda com estes Termos de Uso. 
                Se você não concordar com qualquer parte destes termos, não utilize nossos serviços.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-2">2. Descrição do Serviço</h3>
              <p className="text-muted-foreground leading-relaxed">
                O StudioAI é uma plataforma de geração de ensaios fotográficos profissionais 
                utilizando inteligência artificial. Transformamos suas fotos pessoais em 
                retratos de qualidade profissional através de tecnologia de IA avançada.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-2">3. Uso das Imagens</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Você mantém todos os direitos sobre as imagens que você enviar e sobre as 
                imagens geradas pela nossa plataforma. Ao usar nosso serviço, você concede 
                ao StudioAI uma licença limitada para:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Processar suas imagens através de nossa tecnologia de IA</li>
                <li>Armazenar suas imagens de forma segura em nossos servidores</li>
                <li>Gerar as fotos profissionais solicitadas</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Nós nunca usaremos suas imagens para fins comerciais, marketing ou 
                treinamento de IA sem seu consentimento explícito.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-2">4. Créditos e Pagamentos</h3>
              <p className="text-muted-foreground leading-relaxed">
                Oferecemos 5 fotos gratuitas para novos usuários. Após isso, você pode 
                adquirir pacotes de créditos. Os créditos não expiram e não são reembolsáveis. 
                Todos os pagamentos são processados de forma segura através de nossos 
                parceiros de pagamento certificados.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-2">5. Conteúdo Proibido</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                É estritamente proibido o upload de:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Conteúdo ilegal, ofensivo ou que viole direitos de terceiros</li>
                <li>Fotos de menores de idade sem consentimento dos responsáveis</li>
                <li>Conteúdo adulto ou sexualmente explícito</li>
                <li>Imagens que promovam violência, discriminação ou ódio</li>
              </ul>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-2">6. Qualidade do Serviço</h3>
              <p className="text-muted-foreground leading-relaxed">
                Embora nos esforcemos para fornecer resultados de alta qualidade, a 
                tecnologia de IA pode não produzir resultados perfeitos em todos os casos. 
                A qualidade das imagens geradas depende da qualidade das fotos originais 
                fornecidas.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-2">7. Limitação de Responsabilidade</h3>
              <p className="text-muted-foreground leading-relaxed">
                O StudioAI não se responsabiliza por danos indiretos, incidentais ou 
                consequentes decorrentes do uso de nossos serviços. Nossa responsabilidade 
                máxima está limitada ao valor pago pelos serviços.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-2">8. Modificações dos Termos</h3>
              <p className="text-muted-foreground leading-relaxed">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. 
                Alterações significativas serão comunicadas por email ou através da plataforma.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-lg mb-2">9. Contato</h3>
              <p className="text-muted-foreground leading-relaxed">
                Para questões sobre estes Termos de Uso, entre em contato através do 
                email: contato@studioai.com
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default TermsModal;
