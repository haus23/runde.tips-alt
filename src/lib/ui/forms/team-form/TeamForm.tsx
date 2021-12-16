import { useForm } from 'react-hook-form';
import Team from '@/api/model/Team';
import { TextField } from '../../components/text-field/TextField';
import { Button } from '../../components/button/Button';

export type TeamFormProps = {
  onSave: (team: Team) => void;
  onCancel?: () => void;
  validateId: (id?: string) => boolean;
};

export const TeamForm = ({ onSave, onCancel, validateId }: TeamFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Team>();

  return (
    <div>
      <div className="bg-white pb-2 border-b border-gray-200">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Neue Mannschaft
        </h3>
      </div>
      <form onSubmit={handleSubmit(onSave)}>
        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-6">
          <TextField
            {...register('id', {
              required: 'Pflichtfeld',
              minLength: { value: 3, message: 'Mindestens drei Zeichen!' },
              validate: (id) => validateId(id) || 'Kennung schon vergeben!',
            })}
            className="sm:col-span-2"
            label="Schlüssel/ID"
            placeholder="Eindeutige Kennung"
            errorMsg={errors.id?.message}
          />
          <TextField
            {...register('name', { required: 'Pflichtfeld' })}
            className="sm:col-span-6"
            label="Verein"
            placeholder="Offizieller Vereinsname"
            errorMsg={errors.name?.message}
          />
          <TextField
            {...register('shortName', { required: 'Pflichtfeld' })}
            className="sm:col-span-4"
            label="Kurzform"
            placeholder="Bekannte Kurzform"
            errorMsg={errors.shortName?.message}
          />
          <div className="sm:col-span-6 flex gap-x-4 justify-end">
            <Button onClick={onCancel}>Abbrechen</Button>
            <Button primary type="submit">
              Speichern
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
