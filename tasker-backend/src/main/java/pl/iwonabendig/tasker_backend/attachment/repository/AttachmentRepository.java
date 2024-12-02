package pl.iwonabendig.tasker_backend.attachment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.iwonabendig.tasker_backend.attachment.entity.Attachment;

public interface AttachmentRepository extends JpaRepository<Attachment, Long> {
}
