package com.pwr.mappers;

import com.pwr.model.VisitEntity;
import com.pwr.model.VisitTO;

public class VisitTOMapper {

    private VisitTOMapper(){

    }

    public static VisitEntity mapVisitTO(VisitTO visitUpdate) {
        VisitEntity visit = new VisitEntity();
        visit.setId(visitUpdate.getId());
        visit.setPatient(visitUpdate.getPatient());
        visit.setDoctor(visitUpdate.getDoctor());
        visit.setHour(visitUpdate.getHour());
        visit.setDate(visitUpdate.getDate());
        visit.setExamination(visitUpdate.getExamination());
        return visit;
    }
}
